import { test } from "@playwright/test";
import { TaskModel } from "./fixtures/task.model";
import { deleteTaskByHelper, postTask } from "./support/helpers";
import { TasksPage } from "./support/pages/tasks";

import data from "./fixtures/tasks.json";

let tasksPage: TasksPage; //PO
test.beforeEach(({ page }) => {
  tasksPage = new TasksPage(page);
});

test.describe("cadastro", () => {
  test("deve poder cadastrar uma nova tarefa", async ({ request }) => {
    // Dado que eu tenho uma nova tarefa
    // E que estou na página  de cadastro
    // Quando  faço o cadastro dessa tarefa
    // Então essa tarefa deve ser exibida na lista
    const task = data.success as TaskModel; // chama os arquivos fixtures .json

    await deleteTaskByHelper(request, task.name); //rota helpers da api da aplicação para deletar antes.

    await tasksPage.go();
    await tasksPage.create(task);
    await tasksPage.shouldHaveText(task.name);
  });

  test("não deve permitir tarefa duplicada", async ({ request }) => {
    const task = data.duplicate as TaskModel;

    await deleteTaskByHelper(request, task.name);
    await postTask(request, task);

    await tasksPage.go();
    await tasksPage.create(task);
    await tasksPage.alertHaveText("Task already exists!");
  });

  test("campo obrigatório", async () => {
    const task = data.required as TaskModel;

    await tasksPage.go();
    await tasksPage.create(task);
    await tasksPage.requiredField("This is a required field");
  });
});

test.describe("atualização", () => {
  test("deve concluir uma tarefa", async ({ request }) => {
    const task = data.update as TaskModel;

    await deleteTaskByHelper(request, task.name);
    await postTask(request, task);

    await tasksPage.go();
    await tasksPage.toggle(task.name);
    await tasksPage.shouldBeDone(task.name);
  });
});

test.describe("exclusão", () => {
  test("deve excluir uma tarefa", async ({ page, request }) => {
    const task = data.delete as TaskModel;

    await deleteTaskByHelper(request, task.name);
    await postTask(request, task);

    await tasksPage.go();
    await tasksPage.remove(task.name);
    await tasksPage.shouldNotExist(task.name);
  });
});
