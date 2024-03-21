const maskedEmail = (email: string): string => {
    const maskedEmail = email.replace(
      /(?<=.{1}).(?=[^@]*?@)|(?<=.{2})[^@](?=.*?@)/g,
      "*"
    );
    return maskedEmail;
}
export default maskedEmail;