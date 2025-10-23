export function changePage(pageName) {
  console.log(`Changing to page: ${pageName}`);

  if (pageName === "") {
    $.get("page/home.html", (data) => {
      $("#app").html(data);
    }).fail((error) => {
      Swal.fire({
        title: "Home Page Missing",
        text: "You are missing the home.html file",
        icon: "ok",
      });
    });
  } else {
    $.get("pages/" + pageName + ".html", (data) => {
      $("#app").html(data);
    }).fail((error) => {
      Swal.fire({
        title: `${pageName} Page Missing`,
        text: `You are missing the ${pageName}.html file.`,
        icon: "ok",
      });
    });
  }
}
