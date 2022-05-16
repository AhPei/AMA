import csrftoken from "./csrftoken";

export default function requestOptions(method, body) {
  const formBody = Object.keys(body)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(body[key]))
    .join("&");
  const requestOptions = {
    method: method,
    credentials: "include",
    mode: "same-origin",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-CSRFToken": csrftoken,
    },
    body: formBody,
  };
  return requestOptions;
}
