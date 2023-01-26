const list = [
	{
		id: 1,
		parentId: null,
		text: "Zastosowanie",
		link: "#Zastosowanie",
	},
	{
		id: 44,
		parentId: null,
		text: "Historia",
		link: "#Historia",
	},
	{
		id: 7,
		parentId: 44,
		text: "Dialekty",
		link: "#Dialekty",
	},
	{
		id: 31,
		parentId: 44,
		text: "Java",
		link: "#Java",
	},
	{
		id: 24,
		parentId: null,
		text: "JavaScript dla WWW",
		link: "#JavaScript_dla_WWW",
	},
	{
		id: 10,
		parentId: 24,
		text: "Interakcja",
		link: "#Interakcja",
	},
	{
		id: 25,
		parentId: 24,
		text: "Osadzanie",
		link: "#Osadzanie",
	},
	{
		id: 6,
		parentId: null,
		text: "Przypisy",
		link: "#Linki zewnętrzne",
	},
];

const listArticle = document.querySelector(".article__list");
const ulParent = document.createElement("ul");
listArticle.appendChild(ulParent);

list.forEach(function (item) {
	if (item["parentId"] === null) {
		let liFirstLevel = document.createElement("li");
		let liFirstLevelId = item["id"];
		liFirstLevel.setAttribute("data-id", liFirstLevelId);
		let linkFirstLevel = document.createElement("a");
		let linkAddress = item["link"];
		linkFirstLevel.setAttribute("href", linkAddress);
		linkFirstLevel.innerText = item["text"];
		liFirstLevel.appendChild(linkFirstLevel);
		ulParent.appendChild(liFirstLevel);
	}
});

const liParentsList = ulParent.querySelectorAll("li");
console.log(liParentsList);

liParentsList.forEach(function (item) {
	let id = Number(item.dataset.id);
	console.log(id);

	const children = list.filter(function (elem) {
		return elem.parentId === id;
	});

	let ulSecondLevel = document.createElement("ul");

	if (children.length > 0) {
		item.appendChild(ulSecondLevel);
	}

	children.forEach(function (element) {
		let liSecondLevel = document.createElement("li");
		let linkSecondLevel = document.createElement("a");
		ulSecondLevel.appendChild(liSecondLevel);
		liSecondLevel.appendChild(linkSecondLevel);
		linkSecondLevel.innerText = element["text"];
		let secondLevelLinkAddress = element["link"];
		linkSecondLevel.setAttribute("href", secondLevelLinkAddress);
	});
});
