// // Logout Button
// async handleLogoutButtonPressed() {
//   const requestOptions = {
//     method: "GET",
//     credentials: "include",
//     mode: "same-origin",
//     headers: {
//       "content-type": "application/x-www-form-urlencoded",
//       "X-CSRFToken": csrftoken,
//     },
//   };
//   await fetch("/api/signout", requestOptions)
//     .then((response) => {
//       if (response.ok) this.props.history.push("/login");
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data["Message"]);
//     })
//     .catch((err) => console.log(err));
// }
