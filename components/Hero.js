import Container from "./Container";
import Form from "./Form";

const Hero = () => {
  return (
    <Container>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <h1 className="max-w-5xl py-2 text-2xl font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 dark:from-green-300 dark:via-blue-500 dark:to-purple-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                Unmasking Clickbait
                <br />Empowering Information Integrity
              </h1>

              <div className="max-w-3xl mt-8 mx-auto text-base leading-relaxed  text-gray-500  dark:text-gray-400">
                BaitBuster is a sophisticated deep learning tool specifically designed for clickbait news headline classification. Leveraging advanced machine learning techniques, BaitBuster has the capability to accurately analyze and categorize headlines as either clickbait or non-clickbait.
              </div>

            </div>
          </div>
        </div>
      </div>
      <Form />
    </Container>

  );
}
export default Hero;