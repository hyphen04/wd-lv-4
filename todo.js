const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      return all.filter((item) => item.dueDate === yesterday)
    }
  
    const dueToday = () => {
      return all.filter((item) => item.dueDate === today)
    }
  
    const dueLater = () => {
      return all.filter((item) => item.dueDate === tomorrow)
    }
  
    const toDisplayableList = (list) => {
      
      return list.map(item => `${item.completed ? `[x]`: `[ ]`} ${item.title} ${item.dueDate === yesterday ? `${yesterday}`: (item.dueDate === today ? " " : `${tomorrow}`)}`).join('\n')
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
 

  module.exports = todoList;