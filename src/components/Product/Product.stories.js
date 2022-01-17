import React from "react";

import Product from "components/Product";

const Comp = {
  title: "Components/Product",
  component: Product,
};

export default Comp;

const Template = (args) => <Product {...args} />;

export const comp = Template.bind({});
comp.args = {
 //
};
