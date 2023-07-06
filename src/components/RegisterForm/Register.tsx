import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";

// Yup ile şema tanımlama
const schema = yup.object().shape({
  userName: yup.string().required("Kullanıcı adı zorunludur."),
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi girin.")
    .required("E-posta adresi zorunludur."),
  password: yup.string().required("Parola zorunludur."),
});

// LoginForm bileşeni
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Verileri göndermek için API çağrısı yapabilirsiniz.
  };

  return (
    <div className="max-w-5xl h-screen mx-auto flex justify-center content-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 flex flex-col gap-y-10"
      >
        <div>
          <TextField
            label="Kullanıcı Adı"
            color="secondary"
            variant="standard"
            {...register("userName")}
            sx={{ width: 384 }}
          />
          {errors.userName && <p>{errors.userName.message}</p>}
        </div>
        <div>
          <TextField
            label="E-posta"
            color="secondary"
            variant="standard"
            {...register("email")}
            sx={{ width: 384 }}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <TextField
            label="Şifre"
            color="secondary"
            variant="standard"
            {...register("password")}
            sx={{ width: 384 }}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <Button type="submit" variant="contained" color="secondary">
          Success
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
