import React, { useState,  useEffect,  useReducer, createContext, useContext,  useRef} from "react";

const pressReducer = (state, action) => {
  switch (action.type) {
    case "INITLOADING":
      return {
        ...state,
        loading: true
      };
    case "INITDATASUCCESS":
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case "INITERROR":
      return {
        ...state,
        error: action.error
      };
    case "CHANGEPRESS":
      return {
        ...state,
        showData: state.data[action.index]
      };
    case "SUBSCRIBE":
      return {
        ...state,
        subscribeList:
          state.subscribeList.length === 0
            ? state.data.filter(data => data.id === action.id)
            : state.subscribeList.concat(
                state.data.filter(data => data.id === action.id)
              )
      };
    case "UNSUBSCRIBE":
      return {
        ...state,
        subscribeList:
          state.subscribeList.length === 0
            ? []
            : state.subscribeList.filter(data => data.id !== action.id)
      };
    default:
      throw new Error(`unhandled action type : ${action.type}`);
  }
};

const PressStateContext = createContext();
const PressDispatchContext = createContext();
const PressNextIdContext = createContext();

export const PressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pressReducer, {
    loading: false,
    data: null,
    error: null,
    showData: null,
    subscribeList: []
  });

  const fetchData = () => {
    dispatch({ type: "INITLOADING" });
    fetch("../newsData.json")
      .then(res => res.json())
      .then(res => {
        dispatch({ type: "INITDATASUCCESS", data: res });
      })
      .catch(e => {
        dispatch({ type: "INITERROR", data: e });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const nextId = useRef(1);
  const { loading, data: pressData, error, showData, subscribeList } = state;

  if (loading) return <div>로딩중</div>;
  if (error) return <div> 에러 </div>;
  if (!pressData) return null;

  return (
    <PressStateContext.Provider value={state}>
      <PressDispatchContext.Provider value={dispatch}>
        <PressNextIdContext.Provider value={nextId}>
          {children}
        </PressNextIdContext.Provider>
      </PressDispatchContext.Provider>
    </PressStateContext.Provider>
  );
};

export const usePressStateCtx = () => useContext(PressStateContext);
export const usePressDispatchCtx = () => useContext(PressDispatchContext);
export const usePressNextIdCtx = () => useContext(PressNextIdContext);
