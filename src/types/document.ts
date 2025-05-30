
export interface DocumentTemplate {
  header: string;
  content: string;
  footer: string;
}

export interface DocumentPage {
  id: number;
  content: string;
  isFirstPage?: boolean;
  isLastPage?: boolean;
}

export interface PlaceholderData {
  [key: string]: string | number;
}
