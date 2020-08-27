import styled, { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export const GlobalStyle = createGlobalStyle`
html, body {
  ${tw`
  min-h-full
  m-0 p-0
  text-black
  font-mono
  `}
}
`;

export const AppContainer = styled.div`
  ${tw`
  h-screen w-screen
  flex items-center justify-center
  p-12 m-auto
  overflow-auto
  bg-gray-200
  `}
`;

export const StyledForm = styled.div`
  ${tw`flex flex-col justify-center items-center`}
  & {
    form {
      ${tw`
      bg-white
      text-center
      rounded
      py-8 px-5
      shadow
      max-w-xs
      `}
    }
    input {
      ${tw`
      border-gray-300 border-solid border rounded
      mb-4
      w-full
      py-2 px-4`}
    }
    button {
      ${tw`
      bg-green-500
      hover:bg-green-700
      text-white font-bold
      py-2 px-4
      border border-blue-700 rounded
      `}
    }
  }
`;
