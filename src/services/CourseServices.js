const prisma = require('../config/database');

class CourseService {
  async create(data) {
    return await prisma.course.create({ data });
  }

  async getAll() {
    return await prisma.course.findMany();
  }

  async getById(id) {
    const course = await prisma.course.findUnique({ where: { id: parseInt(id) } });
    if (!course) throw new Error("Curso não encontrado");
    return course;
  }
}

module.exports = new CourseService();