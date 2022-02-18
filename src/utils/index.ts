import { UrlBreadcrumd } from '../models';

export const getUrlAdress = (addres: string): UrlBreadcrumd[] => {
  const url = addres.split('/').filter((item) => item.length);
  const urlString: UrlBreadcrumd[] = [];
  url.forEach((item, index) =>
    urlString.push({
      link: index > 0 ? `${urlString[index - 1].link}/${item}` : `/${item}`,
      name: item,
    })
  );
  return urlString;
};

export const scrollTopPage = () => window.scrollTo(0,0)

