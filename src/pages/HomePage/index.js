import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Filter from '../../components/organisms/Filter/Filter';
import Products from '../../components/organisms/Products/Products';
import Header from '../../components/organisms/Header/Header';

// State Management
import { updateProducts } from "../../components/organisms/Products/ProductSlice"

// CSS
import '../../styles/HomePage.css';

// 3 temel: JSX - JavaScript içerisinde HTML , Props - Bileşenlere gönderilen bilgi , State

function HomePage() {

    const dispatch = useDispatch()

    const products = useSelector(state => state.productList.products)
    const keyword = useSelector(state => state.filterList.keyword)
    const minPrice = useSelector(state => state.filterList.minPrice)
    const maxPrice = useSelector(state => state.filterList.maxPrice)

    const [selectedCategories, setSelectedCategories] = useState([])

    // Alternatif yöntem
    // const [filterCategories, setFilterCategories] = useState([{name: "smartphones", selected: false}, {name: "laptops", selected: false}])

    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/products/")
            .then((res) => res.json())
            .then((json) => dispatch(updateProducts(json.products)));
    }, [dispatch]);

    function handleCategoryFilter(category) {
        const isCategoryExists = selectedCategories.includes(category)
        if (isCategoryExists) {
            setSelectedCategories(selectedCategories => selectedCategories.filter(c => c !== category))
        } else {
            setSelectedCategories(selectedCategories => [...selectedCategories, category])
        }
    }

    useEffect(() => {
        setFilteredData(products)
    }, [products])


    const calculateResults = useCallback(() => {

        // Elimizdeki data kopyasını aldık
        let dataToBeFiltered = products;

        // Eğer arama kelimesi varsa bununla ilgili ilk filtereleme işlemi yapıldı
        if (keyword.length > 2) {
            dataToBeFiltered = dataToBeFiltered.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()))
        }

        // Eğer minPrice varsa bunun için filtereleme işlemi uyguladı
        if (minPrice > 0) {
            dataToBeFiltered = dataToBeFiltered.filter(item => item.price > minPrice)
        }

        // Eğer maxPrice varsa bunun için filtereleme işlemi uyguladı
        if (maxPrice > 0) {
            dataToBeFiltered = dataToBeFiltered.filter(item => item.price <= maxPrice)
        }

        if (selectedCategories.length > 0) {
            // dataToBeFiltered = dataToBeFiltered.filter(item =>  selectedCategories.some(selectedCategory => selectedCategory === item.category))
            dataToBeFiltered = dataToBeFiltered.filter(item => selectedCategories.includes(item.category))
        }

        setFilteredData(dataToBeFiltered)

    }, [products, keyword, minPrice, maxPrice, selectedCategories])

    return (
        <>
            <Header />
            <div className='main'>
                <Filter calculateResults={calculateResults} handleCategoryFilter={handleCategoryFilter} selectedCategories={selectedCategories} />
                <Products filteredData={filteredData} />
            </div>
        </>
    );
}

export default HomePage;