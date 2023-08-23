import { FC } from "react";

interface IProps {
  width?: string;
  height?: string;
}

export const Logo: FC<IProps> = ({ width = 141, height = 32 }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 141 32"
    >
      <title>logo</title>
      <path
        fill="#ff868e"
        d="M10.454 16.61c0-3.4 2.756-6.156 6.156-6.156h9.234c3.4 0 6.156 2.756 6.156 6.156s-2.756 6.156-6.156 6.156h-9.234c-3.4 0-6.156-2.756-6.156-6.156z"
      ></path>
      <path
        fill="#ff868e"
        d="M16.61 32c-3.4 0-6.156-2.756-6.156-6.156v-9.234c0-3.4 2.756-6.156 6.156-6.156s6.156 2.756 6.156 6.156v9.234c0 3.4-2.756 6.156-6.156 6.156z"
      ></path>
      <path
        fill="#ff868e"
        d="M15.39 3.847c0 2.125-1.723 3.847-3.847 3.847s-3.847-1.723-3.847-3.847 1.723-3.847 3.847-3.847c2.125 0 3.847 1.723 3.847 3.847z"
      ></path>
      <path
        fill="#ff868e"
        d="M7.695 22.315c0 2.125-1.723 3.847-3.847 3.847s-3.847-1.723-3.847-3.847c0-2.125 1.723-3.847 3.847-3.847s3.847 1.723 3.847 3.847z"
      ></path>
      <path
        fill="#ff868e"
        d="M26.162 3.847c0 2.125-1.723 3.847-3.847 3.847s-3.847-1.723-3.847-3.847c0-2.125 1.723-3.847 3.847-3.847s3.847 1.723 3.847 3.847z"
      ></path>
      <path
        fill="#ff868e"
        d="M7.695 11.542c0 2.125-1.723 3.847-3.847 3.847s-3.847-1.723-3.847-3.847c0-2.125 1.723-3.847 3.847-3.847s3.847 1.723 3.847 3.847z"
      ></path>
      <path
        fill="#1d1d1d"
        d="M42.526 25.067v-16.486h7.731c1.297 0 2.355 0.247 3.174 0.742 0.836 0.495 1.459 1.169 1.869 2.022s0.614 1.826 0.614 2.918c0 1.109-0.239 2.091-0.717 2.944-0.461 0.853-1.126 1.519-1.997 1.997-0.853 0.461-1.869 0.691-3.046 0.691h-4.173v5.171h-3.456zM45.982 17.156h3.456c0.99 0 1.732-0.256 2.227-0.768 0.512-0.529 0.768-1.237 0.768-2.125 0-0.956-0.239-1.681-0.717-2.176-0.478-0.512-1.195-0.768-2.15-0.768h-3.584v5.837z"
      ></path>
      <path
        fill="#1d1d1d"
        d="M64.149 25.323c-2.099 0-3.763-0.521-4.992-1.562-1.229-1.058-1.843-2.654-1.843-4.787 0-1.929 0.512-3.456 1.536-4.582 1.041-1.143 2.586-1.715 4.634-1.715 1.877 0 3.311 0.495 4.301 1.485 1.007 0.973 1.51 2.253 1.51 3.84v2.202h-8.781c0.188 0.973 0.631 1.638 1.331 1.997 0.717 0.358 1.724 0.538 3.021 0.538 0.649 0 1.306-0.060 1.971-0.179 0.683-0.119 1.263-0.273 1.741-0.461v2.458c-0.563 0.256-1.22 0.444-1.971 0.563-0.751 0.137-1.57 0.205-2.458 0.205zM60.514 18.078h5.76v-0.666c0-0.7-0.205-1.246-0.614-1.638-0.41-0.41-1.101-0.614-2.074-0.614-1.143 0-1.946 0.23-2.406 0.691-0.444 0.461-0.666 1.203-0.666 2.227z"
      ></path>
      <path
        fill="#1d1d1d"
        d="M76.514 25.323c-1.399 0-2.441-0.367-3.123-1.101-0.666-0.734-0.998-1.732-0.998-2.995v-5.632h-1.715v-2.662h1.715v-2.611l3.456-1.024v3.635h3.072l-0.205 2.662h-2.867v5.402c0 0.666 0.154 1.126 0.461 1.382 0.307 0.239 0.785 0.358 1.434 0.358 0.478 0 0.973-0.085 1.485-0.256v2.381c-0.375 0.154-0.785 0.265-1.229 0.333-0.444 0.085-0.939 0.128-1.485 0.128z"
      ></path>
      <path
        fill="#1d1d1d"
        d="M85.276 25.323c-0.905 0-1.766-0.068-2.586-0.205-0.819-0.119-1.476-0.273-1.971-0.461v-2.867c0.597 0.239 1.271 0.427 2.022 0.563 0.751 0.119 1.442 0.179 2.074 0.179 0.853 0 1.451-0.051 1.792-0.154 0.358-0.102 0.538-0.333 0.538-0.691 0-0.41-0.273-0.708-0.819-0.896-0.529-0.188-1.323-0.452-2.381-0.794-1.109-0.375-1.963-0.828-2.56-1.357s-0.896-1.314-0.896-2.355c0-1.161 0.418-2.048 1.254-2.662 0.853-0.631 2.219-0.947 4.096-0.947 0.751 0 1.459 0.060 2.125 0.179 0.666 0.102 1.229 0.23 1.69 0.384v2.842c-0.461-0.222-0.99-0.384-1.587-0.486-0.597-0.119-1.152-0.179-1.664-0.179-0.734 0-1.323 0.051-1.766 0.154-0.427 0.102-0.64 0.324-0.64 0.666 0 0.375 0.23 0.64 0.691 0.794 0.478 0.154 1.212 0.384 2.202 0.691 0.973 0.29 1.732 0.606 2.278 0.947s0.93 0.751 1.152 1.229c0.222 0.461 0.333 1.041 0.333 1.741 0 2.458-1.792 3.686-5.376 3.686z"
      ></path>
      <path
        fill="#1d1d1d"
        d="M93.051 25.067v-16.486h7.731c1.297 0 2.355 0.247 3.174 0.742 0.836 0.495 1.459 1.169 1.869 2.022s0.614 1.826 0.614 2.918c0 1.109-0.239 2.091-0.717 2.944-0.461 0.853-1.126 1.519-1.997 1.997-0.853 0.461-1.869 0.691-3.046 0.691h-4.173v5.171h-3.456zM96.507 17.156h3.456c0.99 0 1.732-0.256 2.227-0.768 0.512-0.529 0.768-1.237 0.768-2.125 0-0.956-0.239-1.681-0.717-2.176-0.478-0.512-1.195-0.768-2.15-0.768h-3.584v5.837z"
      ></path>
      <path
        fill="#1d1d1d"
        d="M111.665 25.323c-0.768 0-1.485-0.137-2.15-0.41-0.649-0.29-1.178-0.708-1.587-1.254-0.393-0.563-0.589-1.263-0.589-2.099 0-1.195 0.418-2.15 1.254-2.867 0.853-0.717 2.108-1.075 3.763-1.075h3.584v-0.333c0-0.751-0.213-1.28-0.64-1.587-0.41-0.307-1.246-0.461-2.509-0.461-1.382 0-2.714 0.213-3.994 0.64v-2.432c0.563-0.222 1.246-0.401 2.048-0.538 0.819-0.154 1.707-0.23 2.662-0.23 1.826 0 3.234 0.375 4.224 1.126 1.007 0.734 1.51 1.92 1.51 3.558v7.706h-2.995l-0.179-1.101c-0.478 0.427-1.067 0.759-1.766 0.998s-1.579 0.358-2.637 0.358zM112.613 23.044c0.768 0 1.434-0.128 1.997-0.384s1.007-0.58 1.331-0.973v-1.92h-3.507c-1.348 0-2.022 0.555-2.022 1.664 0 1.075 0.734 1.613 2.202 1.613z"
      ></path>
      <path
        fill="#1d1d1d"
        d="M124.064 25.067l-3.2-12.134h3.456l1.843 7.885 2.022-6.323v-1.562h2.637l2.304 7.885 1.792-7.885h3.431l-3.175 12.134h-3.175l-2.33-7.091-2.381 7.091h-3.226z"
      ></path>
    </svg>
  );
};
