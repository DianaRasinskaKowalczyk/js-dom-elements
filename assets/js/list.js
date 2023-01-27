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
		const liFirstLevel = createMenuItem(item);
		const liFirstLevelId = item["id"];
		liFirstLevel.setAttribute("data-id", liFirstLevelId);
		ulParent.appendChild(liFirstLevel);
	}
});

const liParentsList = ulParent.querySelectorAll("li");

liParentsList.forEach(function (item) {
	const id = Number(item.dataset.id);
	const children = list.filter(function (elem) {
		return elem.parentId === id;
	});

	const ulSecondLevel = document.createElement("ul");

	if (children.length > 0) {
		item.appendChild(ulSecondLevel);
	}

	children.forEach(function (element) {
		const liSecondLevel = createMenuItem(element);
		ulSecondLevel.appendChild(liSecondLevel);
	});
});

function createMenuItem(item) {
	const liEl = document.createElement("li");
	const linkEl = document.createElement("a");
	liEl.appendChild(linkEl);
	linkEl.innerText = item["text"];
	linkEl.setAttribute("href", item["link"]);
	return liEl;
}
