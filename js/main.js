const jsonGoods = '{\n' +
    '  "goods": [\n' +
    '    {\n' +
    '      "id": 1,\n' +
    '      "name": "Товар 1",\n' +
    '      "price": 101,\n' +
    '      "priceWithoutDiscount": 201,\n' +
    '      "srcMainImg": "img/bread_1.jpeg",\n' +
    '      "srcDescriptionImg": "img/bread_1.jpeg",\n' +
    '      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis in libero quisquam unde vitae.",\n' +
    '      "consist": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis in libero quisquam unde vitae."\n' +
    '    },\n' +
    '    {\n' +
    '      "id": 2,\n' +
    '      "name": "Товар 2",\n' +
    '      "price": 102,\n' +
    '      "priceWithoutDiscount": null,\n' +
    '      "srcMainImg": "img/bread_2.jpeg",\n' +
    '      "srcDescriptionImg": "img/bread_2.jpeg",\n' +
    '      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis in libero quisquam unde vitae.",\n' +
    '      "consist": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis in libero quisquam unde vitae."\n' +
    '    },\n' +
    '    {\n' +
    '      "id": 3,\n' +
    '      "name": "Товар 3",\n' +
    '      "price": 103,\n' +
    '      "priceWithoutDiscount": 203,\n' +
    '      "srcMainImg": "img/bread_3.jpeg",\n' +
    '      "srcDescriptionImg": "img/bread_3.jpeg",\n' +
    '      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis in libero quisquam unde vitae.",\n' +
    '      "consist": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis in libero quisquam unde vitae."\n' +
    '    },\n' +
    '    {\n' +
    '      "id": 4,\n' +
    '      "name": "Товар 4",\n' +
    '      "price": 104,\n' +
    '      "priceWithoutDiscount": null,\n' +
    '      "srcMainImg": "img/bread_4.jpeg",\n' +
    '      "srcDescriptionImg": "img/bread_4.jpeg",\n' +
    '      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis in libero quisquam unde vitae.",\n' +
    '      "consist": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis in libero quisquam unde vitae."\n' +
    '    }\n' +
    '  ]\n' +
    '}';

function createImgForGood(className, srcText, altText)
{
    let img = document.createElement('img');
    img.src = srcText;
    img.alt = altText;
    img.className = className;

    return img;
}

function createTextBlockForGood(className, text)
{
    let textBlock = document.createElement('div');
    textBlock.className = className;
    textBlock.innerHTML = text;

    return textBlock;
}

function createButtonForGood(className, idGood)
{
    let button = document.createElement('button');
    button.className = className;
    button.innerHTML = 'Подробнее';
    button.id = idGood;

    return button;
}

function createBlockGoodHTML(objGood)
{
    let wrap = document.createElement('div');
    wrap.className = 'catalog_container_element';

    let img = createImgForGood("catalog_container_element_image", objGood["srcMainImg"], objGood["name"]);
    let title = createTextBlockForGood("catalog_container_element_name", objGood["name"]);
    let price = createTextBlockForGood("catalog_container_element_prince", objGood["price"]);
    let button = createButtonForGood("catalog_container_element_button", objGood["id"]);

    wrap.append(img);
    wrap.append(title);
    wrap.append(price);
    wrap.append(button);

    return wrap;
}

function addGoodsToCatalogHTML(arrGoods, blockToAdd) {
    for (i in arrGoods)
    {
        let addingBlock = createBlockGoodHTML(arrGoods[i]);
        blockToAdd.append(addingBlock);
    }
}

function logAllGoodsObj(arrGoods)
{
    for (i in arrGoods) {
        const good = arrGoods[i];
        for (key in good) {
            if (good.hasOwnProperty(key)) {
                console.log(`${key}: ${good[key]}`);
            }
        }
    }
}

function main()
{
    const objGoods = JSON.parse(jsonGoods);
    const arrGoods = objGoods.goods;
    const catalogContainer = document.querySelector('.catalog_container');

    logAllGoodsObj(arrGoods);

    addGoodsToCatalogHTML(arrGoods, catalogContainer);
}

main();
