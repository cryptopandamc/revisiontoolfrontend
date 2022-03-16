import React from "react";
import { Form, Field } from "react-final-form";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

export default (props) => {
  let formData = {
    questionText: '',
    correctAnswer: '',
    approved: '',
    tags: [],
    answers: [],
    answerText: '',
  };

  return (
    <div >
      <div>Add a question</div>
      
      <Form
        onSubmit={onSubmit}
        initialValues={{
          ...formData,
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Question text</label>
              <Field
                name="questionText"
                component="input"
                type="text"
                placeholder="Enter your question text here"
              />
            </div>
            
            {this.state.answers.map((answer, index) => ( 
            <div key={index} className="input-group">
            <input type="text"
                   className="form-control"
                   value={answer.answerText}
                 />
        </div>
  ))}
            <div>
              <label>Answer A</label>
              <Field
                name="answerText"
                component="input"
                type="text"
                placeholder="Enter Answer A"
              />
            </div>
            <div>
              <label>Answer B</label>
              <Field
                name="answerText"
                component="input"
                type="text"
                placeholder="Enter Answer B"
              />
            </div>
            <div>
              <label>Answer C</label>
              <Field
                name="answerText"
                component="input"
                type="text"
                placeholder="Enter Answer C"
              />
            </div>
            <div>
              <label>Answer D</label>
              <Field
                name="answerText"
                component="input"
                type="text"
                placeholder="Enter Answer D"
              />
            </div>
            <div>
              <label>Correct Answer</label>
              <div>
                <label>
                  <Field
                    name="correctAnswer"
                    component="input"
                    type="checkbox"
                    value="A"
                  />A | 
                </label>
                <label>
                  <Field
                    name="correctAnswer"
                    component="input"
                    type="checkbox"
                    value="B"
                  /> B | 
                </label>
                <label>
                  <Field
                    name="correctAnswer"
                    component="input"
                    type="checkbox"
                    value="C"
                  />C |
                </label>
                <label>
                  <Field
                    name="correctAnswer"
                    component="input"
                    type="checkbox"
                    value="D"
                  />{" "}
                  D |
                </label>
              </div>
            </div>
          
            <div>
              <label>Tags</label>
              <Field name="toppings" component="select" multiple>
                <option value="chicken">🐓 Chicken</option>
                <option value="ham">🐷 Ham</option>
                <option value="mushrooms">🍄 Mushrooms</option>
                <option value="cheese">🧀 Cheese</option>
                <option value="tuna">🐟 Tuna</option>
                <option value="pineapple">🍍 Pineapple</option>
              </Field>
            </div>
          
            <div>
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
};


