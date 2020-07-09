export const playIndicatorUrl = (color: string) =>
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' role='presentation' focusable='false' viewBox='6.5 6.5 19 19'%3E%3Cg%3E%3Cpath fill='${encodeURIComponent(
    color,
  )}' d='M22.055 15.867c0 .25-.062.49-.184.719a1.465 1.465 0 0 1-.496.547l-7.055 4.625c-.245.167-.519.25-.82.25-.203 0-.395-.04-.574-.121a1.574 1.574 0 0 1-.805-.805 1.381 1.381 0 0 1-.121-.574V11.43c0-.203.04-.396.121-.578.081-.182.188-.341.324-.477a1.56 1.56 0 0 1 .477-.324 1.457 1.457 0 0 1 1.375.113l7.055 4.445c.219.136.391.316.516.543s.187.465.187.715z' /%3E%3C/g%3E%3C/svg%3E")`;
