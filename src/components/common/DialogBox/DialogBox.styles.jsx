import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 60%;
  padding: 2rem;

  margin-top: 2rem;

  ${({ theme, direction }) => css`
    border-radius: ${theme.utils.border.radius};

    ${direction === 'right'
      ? css`
          background: ${theme.colors.input};
          align-self: flex-end;
          border: 2px solid ${theme.colors.secondary};
        `
      : css`
          background: ${theme.colors.dialogBackground};
          align-self: flex-start;
          border: 2px solid ${theme.colors.lighterPrimary};
        `}

    font-size: ${theme.font.sizes.xsmall};
  `}

  ${media.lessThan('medium')`
    width: 100%;
  `}
`;
