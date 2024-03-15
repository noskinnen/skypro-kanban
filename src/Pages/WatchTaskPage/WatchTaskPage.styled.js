import styled from "styled-components";

export const PopBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;
export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;
export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;
export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;
export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;
export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;
export const CategoriesThemeTopOrangeActiveCategory = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: #ffe4c2;
  color: #ff6d00;
  opacity: 1 !important;
  display: block;
`;
export const WebDesign = styled.p`
  background-color: #ffe4c2;
  color: #ff6d00;
`;
export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;
export const StatusPSbttl = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const StatusThemeGray = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  background: #94a6be;
  color: #ffffff;
`;
export const StatusThemePGray = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  background: #94a6be;
  color: #ffffff;
`;
export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;
export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Subttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;
export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 8px;
`;
export const BtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-right: 8px;
  gap: 8px;
  height: 30px;
`;
export const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 8px;
  width: 100%;
  margin-right: 0px;
`;
export const BtnBrowseEditBtnBor = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;
export const A = styled.span`
  color: #565eef;
  cursor: pointer;
  outline: none;
  :hover {
  background-color: #33399b;
}
`;
export const BtnBrowseDeleteBtnBor = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;
export const BtnBrowseCloseBtnBg = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background-color: #33399b;
  }
`;
export const ABg = styled.span`
  width: 132px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  a {
  color: #565EEF;
}
  :hover {
    background-color: #33399b;
  }
`;