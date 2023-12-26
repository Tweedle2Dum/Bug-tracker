package middlewares

import (
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/tweedle2dum/tracker/utils"
	"github.com/tweedle2dum/tracker/views"
)

func CheckAuth(c *fiber.Ctx) error {
	return CoreAuth(c, false)
}

func CoreAuth(c *fiber.Ctx, isPartialAuth bool) error {
	authToken := strings.TrimSpace(strings.TrimPrefix(c.Get("Authorization"), "Bearer"))
	if authToken == "" {
		if isPartialAuth {
			c.Locals("userEmail", "")
			return c.Next()
		}
		return views.UnAuthorisedView(c)
	}

	claims, err := utils.VerifyFirebaseJWT(authToken)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).SendString("Verification failed")
	}

	userEmail := claims["email"].(string)
	c.Locals("userEmail", userEmail)
	return c.Next()
}
