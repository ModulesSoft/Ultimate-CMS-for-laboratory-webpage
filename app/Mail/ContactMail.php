<?php

namespace App\Mail;

use GuzzleHttp\Psr7\Request;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $name, $email, $messageBody;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($contactEmail)
    {
        $this->name = $contactEmail->name;
        $this->email = $contactEmail->email;
        $this->messageBody = $contactEmail->message;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.contact')
            ->with([
                'name' => $this->name,
                'email' => $this->email,
                'body' => $this->messageBody
            ]);
    }
}
