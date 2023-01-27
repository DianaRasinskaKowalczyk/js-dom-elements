const allToolTips = document.querySelectorAll(".tooltip");

allToolTips.forEach(function (toolTip) {
	const toolTipType = toolTip.dataset.tooltipType;
	const toolTipContent = toolTip.dataset.tooltipContent;
	const newSpan = document.createElement("span");
	newSpan.classList.add("tooltip__box");
	const newElement = createLinkEl(toolTip);

	if (toolTipType === "text") {
		newSpan.classList.add("tooltip__box--text");
		newSpan.innerText = toolTipContent;
	} else if (toolTipType === "image") {
		newSpan.classList.add("tooltip__box--image");
		const imgToolTip = createImgToolTip(toolTip);
		newSpan.appendChild(imgToolTip);
	}
	toolTip.innerHTML = "";
	toolTip.appendChild(newElement);
	toolTip.appendChild(newSpan);
});

function createLinkEl(item) {
	const link = document.createElement("a");
	link.setAttribute("href", item.dataset.url);
	link.innerText = item.innerText;
	return link;
}

function createImgToolTip(item) {
	const img = document.createElement("img");
	img.classList.add("tooltip__image");
	img.setAttribute("src", item.dataset.tooltipContent);
	return img;
}
