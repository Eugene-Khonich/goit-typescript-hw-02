export interface ImgDetails {
  id: number;
  alt_description: string;
  description: string;
  likes: number;
  urls?: {
    regular: string;
    small: string;
  };
  user?: {
    first_name: string;
    last_name: string;
  };
}

export interface ImgResponse {
  results: ImgDetails[];
  total_pages: number;
  total: number;
}

export interface ErrorMsgProps {
  error: string | null;
}

export interface ImageCardProps {
  urls: {
    small: string;
    regular: string;
  };
  likes: number;
  description: string;
  alt_description: string;
  user: {
    first_name: string;
    last_name: string;
  };
  openModal: ImageGalleryProps['openModal'];
}

export interface ModalImageData {
  urls: {
    small: string;
    regular: string;
  };
  description: string;
  alt_description: string;
  user: {
    first_name: string;
    last_name: string;
  };
  likes: number;
}

export interface ImageGalleryProps {
  images: ImgDetails[] | null;
  openModal: (modalImgInfo: ModalImageData) => void;
}

export interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  modalImgInfo: ModalImageData | undefined;
}

export interface LoadMoreBtnProps {
  reachPage: () => void;
}

export interface SearchBarProps {
  setValue: (value: string) => void;
  resetSubmit: () => void;
}
