import React, { useState } from "react";

import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import NewLetter from "../components/NewLetter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import styled from "styled-components";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  @media only screen and (max-width: 380px) {
    width: 0px 20px;
    display: flex;
    flex-direction: column;
  }
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  @media only screen and (max-width: 380px) {
    margin: 0px;
  }
`;
const Option = styled.option``;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  @media only screen and (max-width: 380px) {
    margin: 10px 0px;
  }
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  // console.log(filters);
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Title>Shoes</Title>

      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest </Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products cat={cat} filters={filters} sort={sort} />
      <NewLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
