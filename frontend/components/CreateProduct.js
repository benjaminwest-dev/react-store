import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateProduct() {
  const { inputs, handleChange } = useForm({
    image: '',
    name: '',
    price: 0,
    description: '',
  });
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ inputs });
      }}
    >
      <fieldset aria-busy>
        <label htmlFor="name">
          Image
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            value={inputs.price}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="price">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
