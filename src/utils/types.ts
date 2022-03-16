export interface IbookData {
  title: string;
  link: string;
  imageUrl: string;
  language: string;
  copyright: string;
  totalResults: number;
  startIndex: number;
  itemsPerPage: number;
  maxResults: number;
  query: string;
  searchCategoryId: number;
  searchCategoryName: string;
  returnCode: number;
  returnMessage: string;
  itemId: number;
  isbn: string;
  url: string;
  author: string;
  translator: string;
  description: string;
  priceStandard: number;
  priceSales: number;
  discountRate: number;
  saleStatus: string;
  mileage: number;
  mileageRate: number;
  coverSmallUrl: string;
  coverLargeUrl: string;
  categoryId: number;
  categoryName: string;
  publisher: string;
  pubDate: string;
}

export interface IFbookData extends IbookData {
  rating: number;
  editDate: Date;
  shortComment: string;
  longComment: string;
}

export interface reduxState {
  isLoggedIn?: boolean;
  showLoginModal?: boolean;
  setIsLoggedIn?: (data: boolean) => void;
  setShowLoginModal?: (data: boolean) => void;
}
