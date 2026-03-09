const prisma = require('../config/database');

class EnrollmentService {
  async enroll(userId, courseId) {
    const user = await prisma.user.findUnique({ where: { id: parseInt(userId) } });
    const course = await prisma.course.findUnique({ where: { id: parseInt(courseId) } });

    if (!user || !course) throw new Error("Usuário ou Curso inexistente");

    try {
      return await prisma.enrollment.create({
        data: {
          user_id: parseInt(userId),
          course_id: parseInt(courseId)
        }
      });
    } catch (error) {
      if (error.code === 'P2002') throw new Error("Usuário já matriculado neste curso");
      throw error;
    }
  }
}

module.exports = new EnrollmentService();
