const notifications = document.querySelectorAll(".notification-container");
const notificationSource = document.querySelectorAll(".notification-source");
const postSource = document.querySelectorAll(".notification-post");
const groupSource = document.querySelectorAll(".notification-group");
const readAll = document.getElementById("readAll-button");

const countNotification = () => {
  let unreadNotifications = null;
  notifications.forEach((element) => {
    if (element.classList.contains("notification-container--unread")) {
      unreadNotifications = unreadNotifications + 1;
    }
  });
  document.getElementById("notification-unread").innerHTML =
    unreadNotifications;
};
countNotification();

readAll.addEventListener("click", () => {
  notifications.forEach((notif) => {
    const remove = notif.querySelector(".notification-status");
    if (notif.classList.contains("notification-container--unread")) {
      notif.classList.remove("notification-container--unread");
      remove.classList.remove("notification-status--unread");
      countNotification();
    }
  });
});

notifications.forEach((element) => {
  element.addEventListener("click", (notification) => {
    const remove = notification.target.querySelector(".notification-status");
    if (element.classList.contains("notification-container--unread")) {
      element.classList.remove("notification-container--unread");
      remove.classList.remove("notification-status--unread");
      countNotification();
    }
  });
});

notificationSource.forEach((element) => {
  element.addEventListener("click", (notification) => {
    notification.stopPropagation();
    notification.preventDefault();
    // alert(`link to ${element.innerHTML}`);
    window.location.assign(
      "https://web.facebook.com/profile.php?id=100009379149600"
    );
  });
});

postSource.forEach((element) => {
  element.addEventListener("click", (notification) => {
    notification.stopPropagation();
    notification.preventDefault();
    alert(`link to ${element.innerHTML} post`);
  });
});

groupSource.forEach((element) => {
  element.addEventListener("click", (notification) => {
    notification.stopPropagation();
    notification.preventDefault();
    alert(`link to ${element.innerHTML} group`);
  });
});
