// SearchBox.js

import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values) => {
        navigate('/results?query=' + values.query);
      }}
    >
      {() => (
        <Form>
          <Field 
            name="query"
            className="form-control" 
            type="text" 
            placeholder="Search products..." 
          />
          
          <button type="submit">Search</button>
        </Form>
      )}
    </Formik>
  )
}

export default SearchBox;