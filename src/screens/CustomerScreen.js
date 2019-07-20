import React, { Component } from "react";
import { Container, Content, Item, Input, Icon } from "native-base";

import HeaderMandiri from "../components/Header";
import CustomerCard from "../components/CustomerCard";

const customers = [
  {
    name: "Andy Mulyono",
    star: "5",
    day: "1",
    address: "Jln. Ks. Tubun No. 2-4, RT4, Kota Bambu",
    city: "Jakarta"
  },
  {
    name: "Jessica Angelia",
    star: "4.8",
    day: "2",
    address: "Jln. Ks. Tubun No. 2-4, RT4, Kota Bambu",
    city: "Jakarta"
  },
  {
    name: "Martin Oktavino",
    star: "4.1",
    day: "1",
    address: "Jln. Ks. Tubun No. 2-4, RT4, Kota Bambu",
    city: "Jakarta"
  },
  {
    name: "Josh Tanuwijaya",
    star: "4",
    day: "2",
    address: "Jln. Ks. Tubun No. 2-4, RT4, Kota Bambu",
    city: "Jakarta"
  },
  {
    name: "Melinda Sina",
    star: "3.8",
    day: "3",
    address: "Jln. Ks. Tubun No. 2-4, RT4, Kota Bambu",
    city: "Jakarta"
  }
];

const NameStyle = {
  fontSize: 20
};

class CustomerScreen extends Component {
  render() {
    return (
      <Container>
        <HeaderMandiri />
        <Content
          style={{
            backgroundColor: "#F0F0F0",
            paddingHorizontal: 20,
            paddingTop: 10
          }}
        >
          <Item>
            <Icon active name="search" />
            <Input placeholder="Search..." />
          </Item>

          {customers.map(customer => {
            return (
              <CustomerCard
                name={customer.name}
                star={customer.star}
                day={customer.day}
                address={customer.address}
                city={customer.city}
              />
            );
          })}
        </Content>
      </Container>
      // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      //   <Text>Welcome to CustomerScreen</Text>
      // </View>
    );
  }
}

export default CustomerScreen;
