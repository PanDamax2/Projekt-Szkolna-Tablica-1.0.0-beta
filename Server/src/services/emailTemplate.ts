export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zweryfikuj swój email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Zweryfikuj swój email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Witaj,</p>
    <p>Dziękujemy za rejestrację! Twój kod weryfikacyjny to:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{verificationCode}</span>
    </div>
    <p>Wprowadź ten kod na stronie weryfikacyjnej, aby zakończyć rejestrację.</p>
    <p>Ten kod wygaśnie za 1 godzine ze względów bezpieczeństwa.</p>
    <p>Jeśli nie tworzyłeś konta u nas, zignoruj tę wiadomość.</p>
    <p>Pozdrawiamy,<br>Zespół Twojej Aplikacji</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>To jest automatyczna wiadomość, prosimy nie odpowiadać na ten email.</p>
  </div>
</body>
</html>
`;

export const VERIFICATION_EMAIL_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weryfikacja zakończona pomyślnie</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Weryfikacja zakończona pomyślnie</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Witaj,</p>
    <p>Twoje konto zostało pomyślnie zweryfikowane. Teraz możesz w pełni korzystać z naszej aplikacji.</p>
    <p>Jeśli masz jakiekolwiek pytania, skontaktuj się z naszym zespołem wsparcia.</p>
    <p>Pozdrawiamy,<br>Zespół Twojej Aplikacji</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>To jest automatyczna wiadomość, prosimy nie odpowiadać na ten email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset hasła zakończony pomyślnie</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Reset hasła zakończony pomyślnie</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Witaj,</p>
    <p>Informujemy, że Twoje hasło zostało pomyślnie zresetowane.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>Jeśli nie inicjowałeś tego resetu hasła, natychmiast skontaktuj się z naszym zespołem wsparcia.</p>
    <p>Ze względów bezpieczeństwa zalecamy, abyś:</p>
    <ul>
      <li>Używał silnego, unikalnego hasła</li>
      <li>Włączył dwuskładnikowe uwierzytelnianie, jeśli jest dostępne</li>
      <li>Unikał używania tego samego hasła na różnych stronach</li>
    </ul>
    <p>Dziękujemy za pomoc w utrzymaniu bezpieczeństwa Twojego konta.</p>
    <p>Pozdrawiamy,<br>Zespół Twojej Aplikacji</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>To jest automatyczna wiadomość, prosimy nie odpowiadać na ten email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zresetuj swoje hasło</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Reset hasła</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Witaj,</p>
    <p>Otrzymaliśmy prośbę o zresetowanie Twojego hasła. Jeśli nie złożyłeś tej prośby, zignoruj ten email.</p>
    <p>Aby zresetować hasło, kliknij poniższy przycisk:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Resetuj hasło</a>
    </div>
    <p>Ten link wygaśnie za 1 godzinę ze względów bezpieczeństwa.</p>
    <p>Pozdrawiamy,<br>Zespół Twojej Aplikacji</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>To jest automatyczna wiadomość, prosimy nie odpowiadać na ten email.</p>
  </div>
</body>
</html>
`;
