
import { useState, useEffect } from 'react';
import { DocumentTemplate, DocumentPage, PlaceholderData } from '../types/document';
import { replacePlaceholders, splitContentIntoPages } from '../utils/documentUtils';

export const useDocumentPagination = (
  template: DocumentTemplate,
  placeholderData: PlaceholderData,
  pageHeight: number = 950
) => {
  const [pages, setPages] = useState<DocumentPage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generatePages = () => {
      setIsLoading(true);
      
      // Replace placeholders in all parts of the document
      const processedHeader = replacePlaceholders(template.header, placeholderData);
      const processedContent = replacePlaceholders(template.content, placeholderData);
      const processedFooter = replacePlaceholders(template.footer, placeholderData);
      
      // Split content into pages (reserve less space for header and footer)
      const availableContentHeight = pageHeight - 80; // Reduced reserved space
      const contentPages = splitContentIntoPages(processedContent, availableContentHeight);
      
      // Create page objects
      const documentPages: DocumentPage[] = contentPages.map((pageContent, index) => ({
        id: index + 1,
        content: pageContent,
        isFirstPage: index === 0,
        isLastPage: index === contentPages.length - 1
      }));
      
      setPages(documentPages);
      setIsLoading(false);
    };

    generatePages();
  }, [template, placeholderData, pageHeight]);

  return { pages, isLoading };
};
