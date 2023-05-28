import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Form } from "react-bootstrap";
import { useLoginMutation } from "../../../../app/rtkQueryApi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../services/reactContext/AuthContext";
import "./RtkQueryLogin.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RtkQueryLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { idInstance, apiTokenInstance, setIdInstance, setApiTokenInstance } =
    useContext(AuthContext);
  const [loginMutation, { error: loginError }] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await loginMutation({
        idInstance: data.idInstance,
        apiTokenInstance: data.apiTokenInstance,
      });
      if (result.data) {
        console.log("Login successful, setting context values");
        setIdInstance(data.idInstance);
        setApiTokenInstance(data.apiTokenInstance);
        navigate("/list");
      } else {
        console.error("Login failed:", result.error);
        toast.error("Login failed: check your credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed: check your credentials");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        idInstance,
        apiTokenInstance,
        setIdInstance,
        setApiTokenInstance,
      }}
    >
      <Container className="login-container">
        <div className="login-panel">
          <div className="formContent">
            <h2>Sign in to WhatsApp</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="idInstance">
                <Form.Control
                  type="text"
                  placeholder="Enter Id Instance"
                  {...register("idInstance", { required: true })}
                  isInvalid={errors.idInstance}
                  className="login-input"
                />
                {errors.idInstance && (
                  <Form.Control.Feedback
                    type="invalid"
                    style={{
                      display: "flex",
                      "justify-content": "center",
                      color: "red",
                    }}
                  >
                    Id Instance is required
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group controlId="apiTokenInstance">
                <Form.Control
                  type="password"
                  placeholder="Enter Api Token Instance"
                  {...register("apiTokenInstance", { required: true })}
                  isInvalid={errors.apiTokenInstance}
                  className="login-input apiTokenInstance"
                />
                {errors.apiTokenInstance && (
                  <Form.Control.Feedback
                    type="invalid"
                    style={{
                      display: "flex",
                      "justify-content": "center",
                      color: "red",
                    }}
                  >
                    Api Token Instance is required
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <div className="buttons">
                <Button
                  variant="primary"
                  type="submit"
                  className="login-button"
                >
                  Log In
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </AuthContext.Provider>
  );
};
