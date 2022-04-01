import "./SignIn.css";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, Link as LinkUp } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="https://mui.com/" id="c">
        to={`/SingIn`}
      </Link>{" "}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

//Login with backend password comparison
export default function SignIn() {
  const navigate = useNavigate();

  function login_user(logInUser) {
    fetch(`http://localhost:3001/users/login`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(logInUser),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.accessToken = data.accessToken;
        if (data.status == 200) {
          navigate("/Home");
        }
      });
  }
  function without_account() {
    localStorage.accessToken = "-1";
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let name = String(data.get("username"));
    let password = String(data.get("password"));
    login_user({
      username: name,
      password: password,
    });
  };

  return (
    <div>
      <div className="Welcome">
        Welcome to the great playlist site.
        <br /> Where you can create your own playlists <br />
        and watch what playlists are doing across the web
      </div>
      <div className="logIn">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h6">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  className="TextField name"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  className="TextField password"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  id="remember"
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />

                <Button
                  id="login_btn"
                  type="submit"
                  fullWidth
                  // variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" id="LinkForgotPassword">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <LinkUp to={`/SignUp`} id="LinkUp">
                      {"Don't have an account? Sign Up"}
                    </LinkUp>
                  </Grid>
                  <Grid item>
                    <LinkUp
                      to={`/Home`}
                      id="without_account"
                      onClick={() => without_account()}
                    >
                      {"Login without opening an account"}
                    </LinkUp>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}
