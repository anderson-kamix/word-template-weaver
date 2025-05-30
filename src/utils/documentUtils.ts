
import { PlaceholderData } from '../types/document';

export const replacePlaceholders = (text: string, data: PlaceholderData): string => {
  let result = text;
  
  // Replace placeholders like {processo:jf}, {cliente:nome}, etc.
  Object.entries(data).forEach(([key, value]) => {
    const placeholder = `{${key}}`;
    const globalRegex = new RegExp(placeholder.replace(/[{}]/g, '\\$&'), 'g');
    result = result.replace(globalRegex, String(value));
  });
  
  return result;
};

export const estimateContentHeight = (content: string): number => {
  // Estimativa básica baseada no número de caracteres e tags HTML
  const textLength = content.replace(/<[^>]*>/g, '').length;
  const paragraphs = (content.match(/<p[^>]*>/g) || []).length;
  const lineBreaks = (content.match(/<br[^>]*>/g) || []).length;
  
  // Estimativa aproximada: 20px por linha de texto + espaçamento de parágrafos
  return (textLength / 80) * 20 + paragraphs * 15 + lineBreaks * 20;
};

export const splitContentIntoPages = (content: string, maxPageHeight: number): string[] => {
  const pages: string[] = [];
  const paragraphs = content.split('</p>').filter(p => p.trim());
  
  let currentPage = '';
  let currentHeight = 0;
  
  paragraphs.forEach((paragraph, index) => {
    const fullParagraph = paragraph + (index < paragraphs.length - 1 ? '</p>' : '');
    const paragraphHeight = estimateContentHeight(fullParagraph);
    
    if (currentHeight + paragraphHeight > maxPageHeight && currentPage) {
      pages.push(currentPage);
      currentPage = fullParagraph;
      currentHeight = paragraphHeight;
    } else {
      currentPage += fullParagraph;
      currentHeight += paragraphHeight;
    }
  });
  
  if (currentPage) {
    pages.push(currentPage);
  }
  
  return pages.length > 0 ? pages : [content];
};
