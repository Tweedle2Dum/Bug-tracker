package comment

import (
	"github.com/google/uuid"
	"github.com/tweedle2dum/tracker/models"
)

type Service interface {
	CreateComment(content string, taskId uuid.UUID, userId uuid.UUID) (*models.Comment, error)
	GetAllComments(taskId uuid.UUID) ([]models.Comment, error)
}

type comSvc struct {
	repo Repository
}

func (s *comSvc) CreateComment(content string, taskId uuid.UUID, userId uuid.UUID) (*models.Comment, error) {
	return s.repo.CreateComment(content, taskId, userId)
}

func (s *comSvc) GetAllComments(taskId uuid.UUID) ([]models.Comment, error) {
	return s.repo.GetAllComments(taskId)
}

func NewService(r Repository) Service {
	return &comSvc{repo: r}
}
