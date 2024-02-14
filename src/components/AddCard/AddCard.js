import { Field, Formik } from 'formik';
// import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../images/icons.svg';
import toast from 'react-hot-toast';
import { toastStyles } from '../../ToasterOptions';

import {
  AddCardBtn,
  AddCardButtonSvg,
  AddCardColorCont,
  AddCardContCal,
  AddCardContMark,
  AddCardContainer,
  AddCardDate,
  // AddCardDesc,
  AddCardDescription,
  AddCardHeader,
  AddCardLabelColor,
  AddCardLabelText,
  AddCardOptionCont,
  AddCardSvgButtonText,
  AddCardSvgClose,
  AddCardSvgContainer,
  AddCardTextCal,
  AddCardTextCont,
  AddCardTitle,
  AddCardWrapper,
  DatePickerCalendar,
} from './AddCard.styled';
import { useState} from 'react';
import { CLoseButton } from 'components/EditProfileModal/EditProfileModal.styled';
import { addTask } from 'redux/tasks/operations';
import { useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";

export const AddCard = ({ onCloseModal, id }) => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  // const formik = useFormik({
  //   initialValues: {
  //     title: '',
  //     description: '',
  //     priority: '',
  //     deadline: '',
  //   },
   
  // });

//   const saveCard = ()=>{

//     const newCard = {
//       title: formik.values.title,
//       description: formik.values.description,
//       priority: formik.values.priority,
//       deadline: formik.values.deadline,
//     };
// dispatch(addTask(newCard));


//   }

  const isToday = date => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const successToaster = () => {
    toast.success('You successfully added card!', {
      icon: '👍',
      duration: 4000,
      style: toastStyles.success,
    });
  };

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        priority: ''?? 'Without',
        deadline: `${startDate}`,
      }}
      onSubmit={(values, { resetForm }) => {
        const newCard = {
          title: values.title,
          description: values.description,
          priority: values.priority,
          deadline: values.deadline,
          columnId: id
        };
        console.log(newCard)
        dispatch(addTask(newCard));
        resetForm();
        successToaster();
      }}
    >
      <AddCardWrapper>
        <CLoseButton onClick = {onCloseModal}>
          <AddCardSvgClose>
          <use xlinkHref={`${sprite}#icon-x-close`}></use>
          </AddCardSvgClose>
          </CLoseButton>
        <AddCardContainer>
          <AddCardHeader>Add Card</AddCardHeader>
          <AddCardTextCont>
            <AddCardTitle name="title" placeholder="Title" />
            {/* <Field className='AddCardDesc' as='textarea'name="description"></Field> */}
            <Field
            as={AddCardDescription}
              name="description"
           
              placeholder="Description"
              // value={Formik.values.description}
              // onChange={(e) => {
              //   AddCardDescription.value = e.target.value;
              //   console.dir(AddCardDescription.value);
              // }}
              // onBlur={Formik.handleBlur}
            />
          </AddCardTextCont>
          <AddCardOptionCont>
            <AddCardColorCont>
              <AddCardLabelText>Label color</AddCardLabelText>

              <label>
                <AddCardContMark>
                  <AddCardLabelColor type="radio" name="priority" value="Low" />
                  <AddCardLabelColor type="radio" name="priority" value="Medium" />
                  <AddCardLabelColor type="radio" name="priority" value="High" />
                  <AddCardLabelColor type="radio" name="priority" value="Without" />
                </AddCardContMark>
              </label>
            </AddCardColorCont>
            <AddCardContCal>
           
              <AddCardTextCal>DeadLine</AddCardTextCal>
              <DatePickerCalendar          name='deadline'
          selected={startDate}
          onChange={date => setStartDate(date)}
          dateFormat={
            isToday(startDate) ? "'Today,' MMMM d" : 'EEEE,MMMM d'
          }
          // showWeekNumbers
          />
        {/* <DatePicker

        /> */}
      {/* </DatePickerCalendar> */}
              {/* <AddCardDate
              name='deadline'
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat={
                  isToday(startDate) ? "'Today,' MMMM d" : 'EEEE,MMMM d'
                }
                showWeekNumbers
              /> */}
            </AddCardContCal>
          </AddCardOptionCont>
        </AddCardContainer>
        <AddCardBtn type="submit">
          <AddCardSvgContainer>
            <AddCardButtonSvg>
              <use xlinkHref={`${sprite}#icon-plus`}></use>
            </AddCardButtonSvg>
          </AddCardSvgContainer>
          <AddCardSvgButtonText>Add</AddCardSvgButtonText>
        </AddCardBtn>
      </AddCardWrapper>
    </Formik>
  );
};
