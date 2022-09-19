const todoList = require("../todo");

const {all, markAsComplete, add} = todoList();

describe("Todoslist Test Suite", () => {
    beforeAll(() => {
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-IN")
            }
        );
    })
    test("Should add new todo", () => {
        const todoLength = all.length;
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-IN")
            }
        );
        expect(all.length).toBe(todoLength + 1);    
    });
    test("Should mark a todo as completed", () => {
        expect(all[0].completed).toBe(false)
        markAsComplete(0)
        expect(all[0].completed).toBe(true)
    });
    test("Retrieval of overdue items", () => {
        
        
    });
    test("Retrieval of due today items", () => {


    });
    test("Retrieval of due later items", () => {


    });
})