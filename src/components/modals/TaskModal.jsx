import React, { useState } from 'react'

import '../../App.css'


export default function TaskModal({ initialTasks }) {
    const [task, setTasks] = useState(initialTasks);

    // State for the 'currently selected' task in the modal
    const [selectedTask, setSelectedTask] = useState(null)

    // Boolean for whether the modal is open
    cosnt [isModalOpen, setIsModalOpen] = useState(false)

    // 1) When user clicks a task card, we open the modal and set that task as 'selected'


    // 2) When user saves changes, update the tasks[] array and close modal


    //3) When user deletes, remove from tasks[] and close modal


}
