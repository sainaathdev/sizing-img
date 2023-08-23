let imageElement = document.getElementById("image");

let originalImageWidth = 200;

imageElement.style.width = originalImageWidth;

let warningMessageElement = document.getElementById("warningMessage");
let imageWidthElement = document.getElementById("imageWidth");

let maxImageWidth = 300;
let minImageWidth = 100;
let maxWidthWaningMessage = "Too big. Decrease the size of the Image.";
let minWidthWaningMessage = "Can't Visible. Increase the size of the Image.";

imageElement.style.width = originalImageWidth + "px";
imageWidthElement.textContent = originalImageWidth + "px";

function widthIncrease() {
    if (originalImageWidth >= maxImageWidth) {
        warningMessageElement.textContent = maxWidthWaningMessage;
    } else {
        originalImageWidth = originalImageWidth + 5;
        let UpdatedImageWidth = originalImageWidth + "px";

        warningMessageElement.textContent = "";
        imageElement.style.width = UpdatedImageWidth;
        imageWidthElement.textContent = UpdatedImageWidth;
    }
}

function widthDecrease() {
    if (originalImageWidth <= minImageWidth) {
        warningMessageElement.textContent = minWidthWaningMessage;
    } else {
        originalImageWidth = originalImageWidth - 5;
        let UpdatedImageWidth = originalImageWidth + "px";

        warningMessageElement.textContent = "";
        imageElement.style.width = UpdatedImageWidth;
        imageWidthElement.textContent = UpdatedImageWidth;
    }
}