import { makeAutoObservable, runInAction } from 'mobx'
import axios, { AxiosResponse } from 'axios'
import { BookDetails, BookItem } from '../../models';
import { defaultBookDetail, defaultLoadStep, serverKeyParam } from '../general/general.data';



const urlBooks = 'https://www.googleapis.com/books/v1/volumes';

class BooksService {
  readonly PRINT_TYPE: string = 'books';
  public books: BookItem[] = [];
  public total: number = 0;
  public bookDetails: BookDetails = defaultBookDetail;
  public loading = false;
  readonly loadStep = defaultLoadStep;
  public title: string = '';
  public category: string = '';
  public orderBy: string = '';
  public thereIsMore: boolean = false;

  constructor() {
    makeAutoObservable(this)
  }

  async fetchAllBooks(title: string, category: string, orderBy: string) {
    try {
      runInAction(() => {
        this.loading = true;
        this.orderBy = orderBy;
        this.title = title;
        this.category = category;
      })
      const params = this.setParams(0);

      const result = await axios.get(urlBooks, { params: params })
      if (result.status !== 200) {
        console.log('result', result)
        return 
      }
      runInAction(() => {
        this.books = [];
        this.fillBooksArray(result);
        this.total = result.data.totalItems;
        this.thereIsMore = this.total > this.loadStep;
      })
    } catch (error) {
      console.log(error)
    } finally {
      runInAction(() => (this.loading = false))
    }
  }

  async fetchBooksPaging(newPage: number) {
    try {
      runInAction(() => (this.loading = true))
      
      const params = this.setParams(newPage);
      
      const result = await axios.get(urlBooks, { params: params })
      if (result.status !== 200) {
        console.log('result', result)
        return 
      }

      runInAction(() => {
        this.fillBooksArray(result);
        this.total = result.data.totalItems;
        this.thereIsMore = this.total > this.loadStep * (newPage + 1)
      })
    } catch (error) {
      console.log(error)
    } finally {
      runInAction(() => (this.loading = false))
    }
  }

  async fetchBookDetail(id: string) {
    try {
      runInAction(() => (this.loading = true));
      const result = await axios.get(`${urlBooks}/${id}`);
      if (result.status !== 200) {
        return console.log('result', result)
      }
      runInAction(() => {
        const book = result.data.volumeInfo;
        this.bookDetails = {
          id: result.data.id,
          imageUrl: book.imageLinks?.thumbnail,
          categories: book.categories,
          title: book.title,
          authors: book.authors,
          description: book.description,
          publishedDate: book.publishedDate,
          previewLink: book.previewLink,
          pageCount: book.pageCount}; 
      })
    } catch (error) {
      console.log(error)
    } finally {
      runInAction(() => (this.loading = false))
    }
  }

  cleanDetail() {
    this.bookDetails = defaultBookDetail     
  }
  cleanBooks() {
    this.books = [];
    this.total = 0;
    this.thereIsMore= false;
  }

  setParams(page: number) {
    return {
      printType: this.PRINT_TYPE,
      q: this.title + (this.category !== 'all' ? `+subject:${this.category}` : ''),
      orderBy: this.orderBy,
      startIndex: page * this.loadStep,
      maxResults: this.loadStep,
      key: serverKeyParam
    };
  }

  fillBooksArray(result: AxiosResponse<any, any>) {
    result?.data?.items?.forEach((element: any) => {
      this.books.push({id: element.id, imageUrl: element.volumeInfo.imageLinks?.smallThumbnail, categories: element.volumeInfo.categories, title: element.volumeInfo.title, authors: element.volumeInfo.authors});
    });
  }
  
}

export const booksService = new BooksService()


