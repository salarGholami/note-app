import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

const notesReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      return [...state, action.palyload];
    }
    case "delete": {
      return state.filter((s) => s.id !== action.palyload);
    }
    case "complete": {
      return state.map((note) =>
        note.id === action.palyload
          ? { ...note, completed: !note.completed }
          : note
      );
    }
    default:
      throw new Error("unknow error" + action.type);
  }
};

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
