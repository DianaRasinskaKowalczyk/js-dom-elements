const allToolTips = document.querySelectorAll(".tooltip");

allToolTips.forEach(function (toolTip) {
	let url = toolTip.dataset.url;
	let toolTipType = toolTip.dataset.tooltipType;
	let toolTipContent = toolTip.dataset.tooltipContent;
	let toolText = toolTip.innerText;
	let link = document.createElement("a");

	link.setAttribute("href", url);
	link.innerText = toolText;

	const newSpan = document.createElement("span");
	newSpan.classList.add("tooltip__box");
	newSpan.classList.add("tooltip__box--text");

	if (toolTipType === "text") {
		newSpan.classList.add("tooltip__box--text");
		newSpan.innerText = toolTipContent;
	} else if (toolTipType === "image") {
		newSpan.classList.add("tooltip__box--image");
		let img = document.createElement("img");
		img.classList.add("tooltip__image");
		img.setAttribute("src", toolTipContent);
		newSpan.appendChild(img);
	}

	toolTip.innerHTML = "";
	toolTip.appendChild(link);
	toolTip.appendChild(newSpan);
});
