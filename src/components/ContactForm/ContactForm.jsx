import { useState } from "react";
import { nanoid } from 'nanoid';
import {
  Form,
  Label,
  Input,
  AddButton,
} from './ContactForm.styled';


export default function ContactForm ({onSubmit}) {
 const [name,setName] = useState('');
 const [number,setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({name, number})
    setName('');
    setNumber('');
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}></Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required="required"
          />
        <Label htmlFor={numberInputId}></Label>
            Number 
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            id={numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required="required"
          />
        <AddButton type="submit">Add contact</AddButton>
      </Form>
  );
}

// const schema = yup.object({
//   name: yup.string()
//   .matches(
//     /^[A-z-А-я\s]+$/,
//     "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//   )
//   .required(),
// number: yup.string()
//   .matches(
//     /^[+]+[0-9-{2}0-9-{3}0-9-{3}0-9-{2}0-9-{2}]+$/,
//     'Phone number must contain 12 number and must be digits'
//   )
//   .required(),
// }).required();

// const Input = ({ label, register, required }) => (
//   <>
//     <label>{label}</label>
//     <input {...register(label, { required })} />
//   </>
// );

// export default function ContactForm () {
//   const { register, handleSubmit, formState:{ errors } } = useForm({
//     resolver: yupResolver(schema)
//   });

//   const nameInputId = nanoid();
//   const numberInputId = nanoid();


//   return (
//     <FormEl onSubmit={handleSubmit(onSubmit)}>
//       <Input label="name" register={register} required />

//          <Label htmlFor={nameInputId}>Name</Label>
//       <InputForm {...register("name", { required: true, maxLength: 20}) } id={nameInputId}/>
//       <ErrorText>{errors.name?.message}</ErrorText>
//       <Label htmlFor={numberInputId}>Number</Label>
//       <InputForm {...register("number", { required: true})} id={numberInputId}/>
//       <ErrorText>{errors.number?.message}</ErrorText>
      
//       <AddButton type="submit" > Add contact</AddButton>
//     </FormEl>
//   );

// }

