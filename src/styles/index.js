import styled from 'styled-components';
import tw from 'tailwind.macro';

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
  ${tw`flex flex-col h-screen justify-center items-center`}
  & {
    form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
    }
    input {
      ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    button {
      ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
    }
  }
`;
