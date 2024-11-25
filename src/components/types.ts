export interface ImgInfo {
  id: number;
  urls: string;
  alt_description: string;
  likes: number;
  user: string;
  description: string;
}

export interface ModalImgInfo {
  modalImg: string;
  modalDesc: string;
  modalAlt: string;
  modalUser: string;
  modalLikes: number | undefined;
  modalIsOpen: boolean;
}
