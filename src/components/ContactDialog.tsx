import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

interface ContactDialogProps {
  trigger: React.ReactNode;
}

const ContactDialog = ({ trigger }: ContactDialogProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Заполните все поля",
        description: "Имя, email и сообщение обязательны.",
        variant: "destructive",
      });
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      toast({
        title: "Некорректный email",
        description: "Проверьте адрес электронной почты.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    // Без бэкенда — имитация отправки
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);

    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время.",
    });

    setName("");
    setEmail("");
    setMessage("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Связаться с нами</DialogTitle>
          <DialogDescription>
            Оставьте сообщение — поможем подобрать тариф под ваш бренд.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="contact-name">Имя</Label>
            <Input
              id="contact-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              autoComplete="name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-message">Сообщение</Label>
            <Textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Расскажите, что вам нужно"
              rows={4}
            />
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full rounded-full" disabled={submitting}>
              {submitting ? "Отправка…" : "Отправить"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
