const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const CourseService = require('./src/services/CourseServices');
const EnrollmentService = require('./src/services/EnrollmentService');

const app = express();
app.use(express.json());

// usar rotas de usuário
app.use(userRoutes);

// Helper de resposta
const sendRes = (res, success, message, data = null, status = 200) => {
  return res.status(status).json({ success, message, data });
};

// Rotas de cursos
app.post('/courses', async (req, res) => {
  try {
    const course = await CourseService.create(req.body);
    sendRes(res, true, "Curso criado com sucesso", course, 201);
  } catch (error) {
    sendRes(res, false, error.message, null, 400);
  }
});

// Rotas de matrícula
app.post('/enrollments', async (req, res) => {
  try {
    const { user_id, course_id } = req.body;
    const enrollment = await EnrollmentService.enroll(user_id, course_id);
    sendRes(res, true, "Matrícula realizada com sucesso", enrollment, 201);
  } catch (error) {
    sendRes(res, false, error.message, null, 400);
  }
});

app.listen(3000, () => console.log('🚀 StudyManager API rodando na porta 3000'));