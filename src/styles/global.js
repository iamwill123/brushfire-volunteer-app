import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  .debug-outline {
    border: 1px solid red;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  html {
    font-size: 12px;
  }
  @media screen and (min-width: 320px) {
    html {
      font-size: calc(12px + 6 * ((100vw - 320px) / 680));
    }
  }
  @media screen and (min-width: 1000px) {
    html {
      font-size: 18px;
    }
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: 'Avenir Black', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  h1, h2, h3, h4 {
    margin-top: 4px;
    margin-bottom: 2px;
  }
  img {
    width: 100%;
    /* border-radius: 10px; */
  }

  .header {
    text-align: center;
    padding: 25px;
    .volunteer-logo {
      width: 80px;
    }
    .toggleModeWrapper {
      display: flex;
      justify-content: flex-end;
    }
  }

  .sort-selector {
    display: flex;
    margin: 20px auto;
    align-items: center;
    justify-content: center;

    input[type="checkbox"] {
      display: none;
    }

    input[type="checkbox"] + span {
      padding: 12px 18px;
      font-size: inherit;
      cursor: pointer;
      border-radius: 50px;
      display: inline-block;
      background: ${({ theme }) => theme.body};
      /* border: 1px solid ; */
      border: 1px solid ${({ theme }) => theme.border};
      transition: all 0.25s linear;
      margin-right: 10px;

      &:hover {
        color: white;
        background: grey;
        border: 1px solid ${({ theme }) => theme.border};
        transition: all 0.25s linear;
      }
    }

    input[type="checkbox"]:checked + span {
      background: rgba(59, 89, 152, 0.1);
      color: rgba(59, 89, 152, 1);
      border: 1px solid ${({ theme }) => theme.border};
    }
  }

  .page-divider {
    background: ${({ theme }) => theme.text};
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;

    .filter-search {
      padding: 15px;

      input {
        width: 300px;
        height: 40px;
        position: relative;
        padding: 0px 18px;
        border: none;
        border-radius: 2px;
        font-size: inherit;
        font-weight: 400;
        line-height: normal;
        outline: none;
        color: ${({ theme }) => theme.text};
        box-shadow: 0px 4px 20px 0px transparent;
        background-color: ${({ theme }) => theme.body};
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
          0.1s padding ease-in-out;
        -webkit-appearance: none;
      }

      @media (max-width: 600px) {
        input {
          width: 100%;
        }
      }
    }
  }

  .event-list,
  .volunteer-list {
    .list-title {
      max-width: 1200px;
      margin: 10px auto;
      padding: 0px 10px;
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      padding: 0 4px;
      max-width: 1200px;
      margin: 20px auto;
      justify-content: center;

      .event-card {
        /* border: 2px solid ${({ theme }) => theme.text}; */
        padding: 0px;
        width: 30%;
        /* border-radius: 10px; */
        margin: 10px;
        -webkit-box-shadow: ${({ theme }) => theme.boxShadowDefault};
        box-shadow: ${({ theme }) => theme.boxShadowDefault};
        transition: all 0.25s linear;

        .event-date {
          color: #d1410c;
        }
        /* .event-time {
        }
        .event-location {
        } */
        .event-desc {
          padding: 25px;
        }

        .event-volunteer-btn {
          float: right;
          position: relative;
          margin-top: -32px;
          margin-right: 10px;

          input[type="checkbox"] {
            display: none;
          }

          input[type="checkbox"] + span {
            padding: 8px;
            font-size: inherit;
            cursor: pointer;
            border-radius: 50px;
            display: inline-block;
            background: ${({ theme }) => theme.body};
            /* border: 1px solid ; */
            border: 1px solid ${({ theme }) => theme.border};
            transition: all 0.25s linear;

            &:hover {
              color: white;
              background: #d1410c;
              border: 1px solid ${({ theme }) => theme.border};
              transition: all 0.25s linear;
            }
          }

          input[type="checkbox"]:checked + span {
            background: green;
            color: white;
            border: 1px solid ${({ theme }) => theme.border};
          }
        }

        img {
          cursor: pointer;
        }

        &:hover {
          box-shadow: ${({ theme }) => theme.boxShadowHover};
          -webkit-box-shadow: ${({ theme }) => theme.boxShadowHover};
          transition: all 0.25s linear;
        }
        .btn-ctas {
          margin: 15px auto;
          text-align: center;
        }

        .button {
          width: 120px;
          padding: 8px;
          font-size: 18px;
          margin-left: 10px;
          border-radius: 5px;
          text-align: center;
          display: inline-block;
          border: 1px solid transparent;
          color: ${({ theme }) => theme.body};
          background: ${({ theme }) => theme.text};

          &:hover {
            color: ${({ theme }) => theme.text};
            background: ${({ theme }) => theme.body};
            border: 1px solid ${({ theme }) => theme.text};
          }
        }
      }

      @media (max-width: 800px) {
        max-width: 100%;
        .event-card {
          width: 40%;
        }
      }

      @media (max-width: 600px) {
        .event-card {
          width: 100%;
        }
      }
    }
  }

  .event-details-page {
    max-width: 1200px;
    margin: 0 auto;

    @media screen and (max-width: 700px) {
      .event-details {
        padding: 10px;
      }
    }

    .more-info {
      margin-top: 30px;
      li {
      color: grey;
        list-style: none;
      }
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      @media screen and (max-width: 700px) {
        flex-direction: column;
      }
    }

    .event-main {
      flex: 60%;
      padding: 20px;
    }

    .event-side {
      flex: 40%;
      padding: 20px;

      .event-date,
      .event-time {
        margin: 0;
        color: #d1410c;
      }
    }

    .event-volunteer-btn {
      margin: 40px auto;

      input[type="checkbox"] {
        display: none;
      }

      input[type="checkbox"] + span {
        padding: 16px 100px;
        font-size: inherit;
        cursor: pointer;
        border-radius: 50px;
        display: inline-block;
        background: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.body};
        /* border: 1px solid ; */
        border: 1px solid ${({ theme }) => theme.border};
        transition: all 0.25s linear;

        &:hover {
          color: white;
          background: #d1410c;
          border: 1px solid ${({ theme }) => theme.border};
          transition: all 0.25s linear;
        }
      }

      input[type="checkbox"]:checked + span {
        background: green;
        color: white;
        border: 1px solid ${({ theme }) => theme.border};
      }
    }

    ul {
      margin-top: 0px;
    }
  }



  .nav-wrapper {
    position: sticky;
    top: 0;
    z-index: 2;
    background: ${({ theme }) => theme.body};
    transition: all 0.25s linear;
  }

  .nav {
    margin: 0;
    padding: 20px;
    display: flex;
    list-style: one;
    align-items: center;
    font-weight: bold;
    background: transparent;
    justify-content: space-between;

    .brushfire-logo {
      width: 50px;
      border-radius: 100%;
    }

    .selectedLink {
      /* background: ${({ theme }) => theme.body}; */
      color: ${({ theme }) => theme.text};
      border-bottom: 2px solid ${({ theme }) => theme.text};
      padding-bottom: 5px;
    }

    a {
      color: ${({ theme }) => theme.text};
      display: inline-block;
      text-decoration: none;
      transition: all 0.25s linear;

      &:hover {
        /* background: ${({ theme }) => theme.body}; */
        color: ${({ theme }) => theme.text};
        border-bottom: 2px solid ${({ theme }) => theme.border};
        transition: all 0.25s linear;
        padding-bottom: 5px;
      }
    }

    li {
      margin-left: 30px;
      display: inline;

      &:first-child {
        margin-left: 0px;
      }
    }

  }

  footer {
    position: relative;
    margin: 0 auto;
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    padding: 20px;
  }

  small {
    display: block;
  }

  button {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: all 0.25s linear;
    &:hover {
      opacity: 0.9;
      transition: all 0.25s linear;
      h2 {
        opacity: 0.8;
        transition: all 0.25s linear;
      }
    }
  }
`;
